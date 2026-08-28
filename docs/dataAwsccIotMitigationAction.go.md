# `dataAwsccIotMitigationAction` Submodule <a name="`dataAwsccIotMitigationAction` Submodule" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotMitigationAction <a name="DataAwsccIotMitigationAction" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationAction(scope Construct, id *string, config DataAwsccIotMitigationActionConfig) DataAwsccIotMitigationAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig">DataAwsccIotMitigationActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig">DataAwsccIotMitigationActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.DataAwsccIotMitigationAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.DataAwsccIotMitigationAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.DataAwsccIotMitigationAction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.DataAwsccIotMitigationAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotMitigationAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionParams">ActionParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference">DataAwsccIotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionArn">MitigationActionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionId">MitigationActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList">DataAwsccIotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionParams"></a>

```go
func ActionParams() DataAwsccIotMitigationActionActionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference">DataAwsccIotMitigationActionActionParamsOutputReference</a>

---

##### `MitigationActionArn`<sup>Required</sup> <a name="MitigationActionArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionArn"></a>

```go
func MitigationActionArn() *string
```

- *Type:* *string

---

##### `MitigationActionId`<sup>Required</sup> <a name="MitigationActionId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionId"></a>

```go
func MitigationActionId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tags"></a>

```go
func Tags() DataAwsccIotMitigationActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList">DataAwsccIotMitigationActionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotMitigationActionActionParams <a name="DataAwsccIotMitigationActionActionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParams {

}
```


### DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams <a name="DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams {

}
```


### DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams <a name="DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams {

}
```


### DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams <a name="DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams {

}
```


### DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {

}
```


### DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams <a name="DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams {

}
```


### DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams {

}
```


### DataAwsccIotMitigationActionConfig <a name="DataAwsccIotMitigationActionConfig" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action#id DataAwsccIotMitigationAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotMitigationActionTags <a name="DataAwsccIotMitigationActionTags" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

&dataawscciotmitigationaction.DataAwsccIotMitigationActionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">OverrideDynamicGroups</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">ThingGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverrideDynamicGroups`<sup>Required</sup> <a name="OverrideDynamicGroups" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```go
func OverrideDynamicGroups() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ThingGroupNames`<sup>Required</sup> <a name="ThingGroupNames" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```go
func ThingGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---


### DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">RoleArnForLogging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `RoleArnForLogging`<sup>Required</sup> <a name="RoleArnForLogging" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```go
func RoleArnForLogging() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams</a>

---


### DataAwsccIotMitigationActionActionParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">AddThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">EnableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">PublishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">ReplaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">UpdateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">UpdateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams">DataAwsccIotMitigationActionActionParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddThingsToThingGroupParams`<sup>Required</sup> <a name="AddThingsToThingGroupParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```go
func AddThingsToThingGroupParams() DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `EnableIoTLoggingParams`<sup>Required</sup> <a name="EnableIoTLoggingParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```go
func EnableIoTLoggingParams() DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `PublishFindingToSnsParams`<sup>Required</sup> <a name="PublishFindingToSnsParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```go
func PublishFindingToSnsParams() DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `ReplaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="ReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```go
func ReplaceDefaultPolicyVersionParams() DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `UpdateCaCertificateParams`<sup>Required</sup> <a name="UpdateCaCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```go
func UpdateCaCertificateParams() DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `UpdateDeviceCertificateParams`<sup>Required</sup> <a name="UpdateDeviceCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```go
func UpdateDeviceCertificateParams() DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams">DataAwsccIotMitigationActionActionParams</a>

---


### DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams</a>

---


### DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---


### DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams</a>

---


### DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---


### DataAwsccIotMitigationActionTagsList <a name="DataAwsccIotMitigationActionTagsList" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotMitigationActionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotMitigationActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotMitigationActionTagsOutputReference <a name="DataAwsccIotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotmitigationaction"

dataawscciotmitigationaction.NewDataAwsccIotMitigationActionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotMitigationActionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags">DataAwsccIotMitigationActionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotMitigationActionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags">DataAwsccIotMitigationActionTags</a>

---




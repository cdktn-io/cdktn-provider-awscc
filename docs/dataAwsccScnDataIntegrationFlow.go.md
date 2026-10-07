# `dataAwsccScnDataIntegrationFlow` Submodule <a name="`dataAwsccScnDataIntegrationFlow` Submodule" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccScnDataIntegrationFlow <a name="DataAwsccScnDataIntegrationFlow" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow awscc_scn_data_integration_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlow(scope Construct, id *string, config DataAwsccScnDataIntegrationFlowConfig) DataAwsccScnDataIntegrationFlow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig">DataAwsccScnDataIntegrationFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig">DataAwsccScnDataIntegrationFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccScnDataIntegrationFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccScnDataIntegrationFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccScnDataIntegrationFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList">DataAwsccScnDataIntegrationFlowSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList">DataAwsccScnDataIntegrationFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.sources"></a>

```go
func Sources() DataAwsccScnDataIntegrationFlowSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList">DataAwsccScnDataIntegrationFlowSourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tags"></a>

```go
func Tags() DataAwsccScnDataIntegrationFlowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList">DataAwsccScnDataIntegrationFlowTagsList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.target"></a>

```go
func Target() DataAwsccScnDataIntegrationFlowTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetOutputReference</a>

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.transformation"></a>

```go
func Transformation() DataAwsccScnDataIntegrationFlowTransformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccScnDataIntegrationFlowConfig <a name="DataAwsccScnDataIntegrationFlowConfig" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/scn_data_integration_flow#id DataAwsccScnDataIntegrationFlow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccScnDataIntegrationFlowSources <a name="DataAwsccScnDataIntegrationFlowSources" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSources {

}
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSource <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource {

}
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions {

}
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy {

}
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority {

}
```


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields {

}
```


### DataAwsccScnDataIntegrationFlowSourcesS3Source <a name="DataAwsccScnDataIntegrationFlowSourcesS3Source" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesS3Source {

}
```


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions {

}
```


### DataAwsccScnDataIntegrationFlowTags <a name="DataAwsccScnDataIntegrationFlowTags" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTags {

}
```


### DataAwsccScnDataIntegrationFlowTarget <a name="DataAwsccScnDataIntegrationFlowTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTarget {

}
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTarget <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget {

}
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions {

}
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy {

}
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority {

}
```


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields {

}
```


### DataAwsccScnDataIntegrationFlowTransformation <a name="DataAwsccScnDataIntegrationFlowTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTransformation {

}
```


### DataAwsccScnDataIntegrationFlowTransformationSqlTransformation <a name="DataAwsccScnDataIntegrationFlowTransformationSqlTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

&dataawsccscndataintegrationflow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```go
func Fields() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPriority`<sup>Required</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```go
func FieldPriority() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords">DedupeRecords</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType">LoadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DedupeRecords`<sup>Required</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords"></a>

```go
func DedupeRecords() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DedupeStrategy`<sup>Required</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy"></a>

```go
func DedupeStrategy() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a>

---

##### `LoadType`<sup>Required</sup> <a name="LoadType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType"></a>

```go
func LoadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---


### DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource">DataAwsccScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdentifier`<sup>Required</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier"></a>

```go
func DatasetIdentifier() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options"></a>

```go
func Options() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesDatasetSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSource">DataAwsccScnDataIntegrationFlowSourcesDatasetSource</a>

---


### DataAwsccScnDataIntegrationFlowSourcesList <a name="DataAwsccScnDataIntegrationFlowSourcesList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccScnDataIntegrationFlowSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccScnDataIntegrationFlowSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccScnDataIntegrationFlowSourcesOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccScnDataIntegrationFlowSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.datasetSource">DatasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources">DataAwsccScnDataIntegrationFlowSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetSource`<sup>Required</sup> <a name="DatasetSource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.datasetSource"></a>

```go
func DatasetSource() DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.s3Source"></a>

```go
func S3Source() DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference</a>

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSources">DataAwsccScnDataIntegrationFlowSources</a>

---


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptions</a>

---


### DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference <a name="DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source">DataAwsccScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options"></a>

```go
func Options() DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">DataAwsccScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowSourcesS3Source
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowSourcesS3Source">DataAwsccScnDataIntegrationFlowSourcesS3Source</a>

---


### DataAwsccScnDataIntegrationFlowTagsList <a name="DataAwsccScnDataIntegrationFlowTagsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccScnDataIntegrationFlowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get"></a>

```go
func Get(index *f64) DataAwsccScnDataIntegrationFlowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccScnDataIntegrationFlowTagsOutputReference <a name="DataAwsccScnDataIntegrationFlowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccScnDataIntegrationFlowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags">DataAwsccScnDataIntegrationFlowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTags">DataAwsccScnDataIntegrationFlowTags</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```go
func Fields() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority">FieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPriority`<sup>Required</sup> <a name="FieldPriority" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```go
func FieldPriority() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords">DedupeRecords</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy">DedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType">LoadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DedupeRecords`<sup>Required</sup> <a name="DedupeRecords" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords"></a>

```go
func DedupeRecords() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DedupeStrategy`<sup>Required</sup> <a name="DedupeStrategy" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy"></a>

```go
func DedupeStrategy() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a>

---

##### `LoadType`<sup>Required</sup> <a name="LoadType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType"></a>

```go
func LoadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---


### DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier">DatasetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget">DataAwsccScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdentifier`<sup>Required</sup> <a name="DatasetIdentifier" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier"></a>

```go
func DatasetIdentifier() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options"></a>

```go
func Options() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTargetDatasetTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTarget">DataAwsccScnDataIntegrationFlowTargetDatasetTarget</a>

---


### DataAwsccScnDataIntegrationFlowTargetOutputReference <a name="DataAwsccScnDataIntegrationFlowTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.datasetTarget">DatasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget">DataAwsccScnDataIntegrationFlowTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetTarget`<sup>Required</sup> <a name="DatasetTarget" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.datasetTarget"></a>

```go
func DatasetTarget() DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference">DataAwsccScnDataIntegrationFlowTargetDatasetTargetOutputReference</a>

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTarget">DataAwsccScnDataIntegrationFlowTarget</a>

---


### DataAwsccScnDataIntegrationFlowTransformationOutputReference <a name="DataAwsccScnDataIntegrationFlowTransformationOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation">SqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.transformationType">TransformationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation">DataAwsccScnDataIntegrationFlowTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlTransformation`<sup>Required</sup> <a name="SqlTransformation" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation"></a>

```go
func SqlTransformation() DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference">DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a>

---

##### `TransformationType`<sup>Required</sup> <a name="TransformationType" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.transformationType"></a>

```go
func TransformationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTransformation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformation">DataAwsccScnDataIntegrationFlowTransformation</a>

---


### DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference <a name="DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccscndataintegrationflow"

dataawsccscndataintegrationflow.NewDataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation">DataAwsccScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccScnDataIntegrationFlowTransformationSqlTransformation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccScnDataIntegrationFlow.DataAwsccScnDataIntegrationFlowTransformationSqlTransformation">DataAwsccScnDataIntegrationFlowTransformationSqlTransformation</a>

---




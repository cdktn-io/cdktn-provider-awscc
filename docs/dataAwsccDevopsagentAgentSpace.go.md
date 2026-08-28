# `dataAwsccDevopsagentAgentSpace` Submodule <a name="`dataAwsccDevopsagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentAgentSpace <a name="DataAwsccDevopsagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space awscc_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpace(scope Construct, id *string, config DataAwsccDevopsagentAgentSpaceConfig) DataAwsccDevopsagentAgentSpace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig">DataAwsccDevopsagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig">DataAwsccDevopsagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDevopsagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.operatorApp">OperatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList">DataAwsccDevopsagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.agentSpaceId"></a>

```go
func AgentSpaceId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperatorApp`<sup>Required</sup> <a name="OperatorApp" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.operatorApp"></a>

```go
func OperatorApp() DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tags"></a>

```go
func Tags() DataAwsccDevopsagentAgentSpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList">DataAwsccDevopsagentAgentSpaceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentAgentSpaceConfig <a name="DataAwsccDevopsagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

&dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsagent_agent_space#id DataAwsccDevopsagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentAgentSpaceOperatorApp <a name="DataAwsccDevopsagentAgentSpaceOperatorApp" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

&dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpaceOperatorApp {

}
```


### DataAwsccDevopsagentAgentSpaceOperatorAppIam <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIam" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

&dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpaceOperatorAppIam {

}
```


### DataAwsccDevopsagentAgentSpaceOperatorAppIdc <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIdc" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

&dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc {

}
```


### DataAwsccDevopsagentAgentSpaceTags <a name="DataAwsccDevopsagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

&dataawsccdevopsagentagentspace.DataAwsccDevopsagentAgentSpaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn">OperatorAppRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam">DataAwsccDevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `OperatorAppRoleArn`<sup>Required</sup> <a name="OperatorAppRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn"></a>

```go
func OperatorAppRoleArn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAgentSpaceOperatorAppIam
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIam">DataAwsccDevopsagentAgentSpaceOperatorAppIam</a>

---


### DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn">IdcApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn">OperatorAppRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc">DataAwsccDevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `IdcApplicationArn`<sup>Required</sup> <a name="IdcApplicationArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn"></a>

```go
func IdcApplicationArn() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `OperatorAppRoleArn`<sup>Required</sup> <a name="OperatorAppRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn"></a>

```go
func OperatorAppRoleArn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAgentSpaceOperatorAppIdc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdc">DataAwsccDevopsagentAgentSpaceOperatorAppIdc</a>

---


### DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference <a name="DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpaceOperatorAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.idc">Idc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp">DataAwsccDevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.iam"></a>

```go
func Iam() DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIamOutputReference</a>

---

##### `Idc`<sup>Required</sup> <a name="Idc" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.idc"></a>

```go
func Idc() DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference">DataAwsccDevopsagentAgentSpaceOperatorAppIdcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAgentSpaceOperatorApp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceOperatorApp">DataAwsccDevopsagentAgentSpaceOperatorApp</a>

---


### DataAwsccDevopsagentAgentSpaceTagsList <a name="DataAwsccDevopsagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAgentSpaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAgentSpaceTagsOutputReference <a name="DataAwsccDevopsagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdevopsagentagentspace"

dataawsccdevopsagentagentspace.NewDataAwsccDevopsagentAgentSpaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAgentSpaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags">DataAwsccDevopsagentAgentSpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAgentSpaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAgentSpace.DataAwsccDevopsagentAgentSpaceTags">DataAwsccDevopsagentAgentSpaceTags</a>

---




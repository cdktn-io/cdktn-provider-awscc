# `dataAwsccSecurityagentAgentSpace` Submodule <a name="`dataAwsccSecurityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentAgentSpace <a name="DataAwsccSecurityagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpace(scope Construct, id *string, config DataAwsccSecurityagentAgentSpaceConfig) DataAwsccSecurityagentAgentSpace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSecurityagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources">AwsResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings">CodeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources">IntegratedResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds">TargetDomainIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId"></a>

```go
func AgentSpaceId() *string
```

- *Type:* *string

---

##### `AwsResources`<sup>Required</sup> <a name="AwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources"></a>

```go
func AwsResources() DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `CodeReviewSettings`<sup>Required</sup> <a name="CodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings"></a>

```go
func CodeReviewSettings() DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IntegratedResources`<sup>Required</sup> <a name="IntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources"></a>

```go
func IntegratedResources() DataAwsccSecurityagentAgentSpaceIntegratedResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags"></a>

```go
func Tags() DataAwsccSecurityagentAgentSpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a>

---

##### `TargetDomainIds`<sup>Required</sup> <a name="TargetDomainIds" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds"></a>

```go
func TargetDomainIds() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentAgentSpaceAwsResources <a name="DataAwsccSecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceAwsResources {

}
```


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs {

}
```


### DataAwsccSecurityagentAgentSpaceCodeReviewSettings <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings {

}
```


### DataAwsccSecurityagentAgentSpaceConfig <a name="DataAwsccSecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentAgentSpaceIntegratedResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResources {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities {

}
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository {

}
```


### DataAwsccSecurityagentAgentSpaceTags <a name="DataAwsccSecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

&dataawsccsecurityagentagentspace.DataAwsccSecurityagentAgentSpaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">LambdaFunctionArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">LogGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">S3Buckets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">SecretArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">Vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `LambdaFunctionArns`<sup>Required</sup> <a name="LambdaFunctionArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```go
func LambdaFunctionArns() *[]*string
```

- *Type:* *[]*string

---

##### `LogGroups`<sup>Required</sup> <a name="LogGroups" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```go
func LogGroups() *[]*string
```

- *Type:* *[]*string

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```go
func S3Buckets() *[]*string
```

- *Type:* *[]*string

---

##### `SecretArns`<sup>Required</sup> <a name="SecretArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```go
func SecretArns() *[]*string
```

- *Type:* *[]*string

---

##### `Vpcs`<sup>Required</sup> <a name="Vpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```go
func Vpcs() DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a>

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">SubnetArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">VpcArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```go
func SubnetArns() *[]*string
```

- *Type:* *[]*string

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```go
func VpcArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">ControlsScanning</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">GeneralPurposeScanning</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlsScanning`<sup>Required</sup> <a name="ControlsScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```go
func ControlsScanning() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GeneralPurposeScanning`<sup>Required</sup> <a name="GeneralPurposeScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```go
func GeneralPurposeScanning() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceCodeReviewSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentAgentSpaceIntegratedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">Integration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">ProviderResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```go
func Integration() *string
```

- *Type:* *string

---

##### `ProviderResources`<sup>Required</sup> <a name="ProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```go
func ProviderResources() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```go
func LeaveComments() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```go
func RemediateCode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">Workspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```go
func Workspace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">CreateDocument</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">FetchDocument</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">UpdateDocument</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```go
func CreateDocument() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FetchDocument`<sup>Required</sup> <a name="FetchDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```go
func FetchDocument() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```go
func UpdateDocument() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">PageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">SpaceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">SpaceTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```go
func PageId() *string
```

- *Type:* *string

---

##### `SpaceKey`<sup>Required</sup> <a name="SpaceKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```go
func SpaceKey() *string
```

- *Type:* *string

---

##### `SpaceTitle`<sup>Required</sup> <a name="SpaceTitle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```go
func SpaceTitle() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```go
func LeaveComments() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```go
func RemediateCode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```go
func LeaveComments() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```go
func RemediateCode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">BitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">BitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">ConfluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">ConfluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">GitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">GitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">GitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">GitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BitbucketCapabilities`<sup>Required</sup> <a name="BitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```go
func BitbucketCapabilities() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `BitbucketRepository`<sup>Required</sup> <a name="BitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```go
func BitbucketRepository() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `ConfluenceCapabilities`<sup>Required</sup> <a name="ConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```go
func ConfluenceCapabilities() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `ConfluenceDocument`<sup>Required</sup> <a name="ConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```go
func ConfluenceDocument() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `GitHubCapabilities`<sup>Required</sup> <a name="GitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```go
func GitHubCapabilities() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `GitHubRepository`<sup>Required</sup> <a name="GitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```go
func GitHubRepository() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `GitLabCapabilities`<sup>Required</sup> <a name="GitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```go
func GitLabCapabilities() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `GitLabRepository`<sup>Required</sup> <a name="GitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```go
func GitLabRepository() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### DataAwsccSecurityagentAgentSpaceTagsList <a name="DataAwsccSecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentAgentSpaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentAgentSpaceTagsOutputReference <a name="DataAwsccSecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentagentspace"

dataawsccsecurityagentagentspace.NewDataAwsccSecurityagentAgentSpaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentAgentSpaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentAgentSpaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a>

---




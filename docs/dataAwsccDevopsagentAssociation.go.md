# `dataAwsccDevopsagentAssociation` Submodule <a name="`dataAwsccDevopsagentAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentAssociation <a name="DataAwsccDevopsagentAssociation" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociation(scope Construct, id *string, config DataAwsccDevopsagentAssociationConfig) DataAwsccDevopsagentAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig">DataAwsccDevopsagentAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig">DataAwsccDevopsagentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDevopsagentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference">DataAwsccDevopsagentAssociationCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds">LinkedAssociationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId"></a>

```go
func AgentSpaceId() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.capabilities"></a>

```go
func Capabilities() DataAwsccDevopsagentAssociationCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference">DataAwsccDevopsagentAssociationCapabilitiesOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration"></a>

```go
func Configuration() DataAwsccDevopsagentAssociationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LinkedAssociationIds`<sup>Required</sup> <a name="LinkedAssociationIds" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds"></a>

```go
func LinkedAssociationIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentAssociationCapabilities <a name="DataAwsccDevopsagentAssociationCapabilities" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationCapabilities {

}
```


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis {

}
```


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting {

}
```


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups {

}
```


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches {

}
```


### DataAwsccDevopsagentAssociationConfig <a name="DataAwsccDevopsagentAssociationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/devopsagent_association#id DataAwsccDevopsagentAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentAssociationConfiguration <a name="DataAwsccDevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfiguration {

}
```


### DataAwsccDevopsagentAssociationConfigurationAws <a name="DataAwsccDevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationAws {

}
```


### DataAwsccDevopsagentAssociationConfigurationAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationAwsResources {

}
```


### DataAwsccDevopsagentAssociationConfigurationAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationAwsTags {

}
```


### DataAwsccDevopsagentAssociationConfigurationAzure <a name="DataAwsccDevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationAzure {

}
```


### DataAwsccDevopsagentAssociationConfigurationDynatrace <a name="DataAwsccDevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationDynatrace {

}
```


### DataAwsccDevopsagentAssociationConfigurationEventChannel <a name="DataAwsccDevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationEventChannel {

}
```


### DataAwsccDevopsagentAssociationConfigurationGitHub <a name="DataAwsccDevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationGitHub {

}
```


### DataAwsccDevopsagentAssociationConfigurationGitLab <a name="DataAwsccDevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationGitLab {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServer <a name="DataAwsccDevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServer {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 {

}
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk {

}
```


### DataAwsccDevopsagentAssociationConfigurationPagerDuty <a name="DataAwsccDevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty {

}
```


### DataAwsccDevopsagentAssociationConfigurationReleaseManagement <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagement {

}
```


### DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess {

}
```


### DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess {

}
```


### DataAwsccDevopsagentAssociationConfigurationServiceNow <a name="DataAwsccDevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationServiceNow {

}
```


### DataAwsccDevopsagentAssociationConfigurationSlack <a name="DataAwsccDevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSlack {

}
```


### DataAwsccDevopsagentAssociationConfigurationSlackBidirectional <a name="DataAwsccDevopsagentAssociationConfigurationSlackBidirectional" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectional"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectional.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectional {

}
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget {

}
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget {

}
```


### DataAwsccDevopsagentAssociationConfigurationSourceAws <a name="DataAwsccDevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSourceAws {

}
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources {

}
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

&dataawsccdevopsagentassociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTesting</a>

---


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.triggerFilterGroups">TriggerFilterGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TriggerFilterGroups`<sup>Required</sup> <a name="TriggerFilterGroups" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.triggerFilterGroups"></a>

```go
func TriggerFilterGroups() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysis</a>

---


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.targetBranches">TargetBranches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `TargetBranches`<sup>Required</sup> <a name="TargetBranches" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.targetBranches"></a>

```go
func TargetBranches() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroups</a>

---


### DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference <a name="DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.patterns">Patterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.patterns"></a>

```go
func Patterns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisTriggerFilterGroupsTargetBranches</a>

---


### DataAwsccDevopsagentAssociationCapabilitiesOutputReference <a name="DataAwsccDevopsagentAssociationCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.codeChangeRiskAnalysis">CodeChangeRiskAnalysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.codeChangeRiskAnalysisAutomatedTesting">CodeChangeRiskAnalysisAutomatedTesting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilities">DataAwsccDevopsagentAssociationCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeChangeRiskAnalysis`<sup>Required</sup> <a name="CodeChangeRiskAnalysis" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.codeChangeRiskAnalysis"></a>

```go
func CodeChangeRiskAnalysis() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisOutputReference</a>

---

##### `CodeChangeRiskAnalysisAutomatedTesting`<sup>Required</sup> <a name="CodeChangeRiskAnalysisAutomatedTesting" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.codeChangeRiskAnalysisAutomatedTesting"></a>

```go
func CodeChangeRiskAnalysisAutomatedTesting() DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference">DataAwsccDevopsagentAssociationCapabilitiesCodeChangeRiskAnalysisAutomatedTestingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationCapabilities">DataAwsccDevopsagentAssociationCapabilities</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.agentElevatedRoleArn">AgentElevatedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `AgentElevatedRoleArn`<sup>Required</sup> <a name="AgentElevatedRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.agentElevatedRoleArn"></a>

```go
func AgentElevatedRoleArn() *string
```

- *Type:* *string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```go
func AssumableRoleArn() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```go
func Resources() DataAwsccDevopsagentAssociationConfigurationAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccDevopsagentAssociationConfigurationAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationAws
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAwsResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAssociationConfigurationAwsResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```go
func ResourceMetadata() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAssociationConfigurationAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationAwsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a>

---


### DataAwsccDevopsagentAssociationConfigurationAzureOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a>

---


### DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a>

---


### DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationEventChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationGitHubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">OwnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.releaseManagementAssociationId">ReleaseManagementAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">RepoId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```go
func OwnerType() *string
```

- *Type:* *string

---

##### `ReleaseManagementAssociationId`<sup>Required</sup> <a name="ReleaseManagementAssociationId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.releaseManagementAssociationId"></a>

```go
func ReleaseManagementAssociationId() *string
```

- *Type:* *string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```go
func RepoId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationGitHub
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationGitLabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">InstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">ProjectPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.releaseManagementAssociationId">ReleaseManagementAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InstanceIdentifier`<sup>Required</sup> <a name="InstanceIdentifier" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```go
func InstanceIdentifier() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProjectPath`<sup>Required</sup> <a name="ProjectPath" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```go
func ProjectPath() *string
```

- *Type:* *string

---

##### `ReleaseManagementAssociationId`<sup>Required</sup> <a name="ReleaseManagementAssociationId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.releaseManagementAssociationId"></a>

```go
func ReleaseManagementAssociationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enabledElevatedTools">EnabledElevatedTools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnabledElevatedTools`<sup>Required</sup> <a name="EnabledElevatedTools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enabledElevatedTools"></a>

```go
func EnabledElevatedTools() *[]*string
```

- *Type:* *[]*string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enabledElevatedTools">EnabledElevatedTools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledElevatedTools`<sup>Required</sup> <a name="EnabledElevatedTools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enabledElevatedTools"></a>

```go
func EnabledElevatedTools() *[]*string
```

- *Type:* *[]*string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DataAwsccDevopsagentAssociationConfigurationOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel">EventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub">GitHub</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">McpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.releaseManagement">ReleaseManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws">SourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```go
func Aws() DataAwsccDevopsagentAssociationConfigurationAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```go
func Azure() DataAwsccDevopsagentAssociationConfigurationAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```go
func Dynatrace() DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `EventChannel`<sup>Required</sup> <a name="EventChannel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```go
func EventChannel() DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `GitHub`<sup>Required</sup> <a name="GitHub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```go
func GitHub() DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```go
func GitLab() DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```go
func McpServer() DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `McpServerDatadog`<sup>Required</sup> <a name="McpServerDatadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```go
func McpServerDatadog() DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```go
func McpServerGrafana() DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```go
func McpServerNewRelic() DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```go
func McpServerSigV4() DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```go
func McpServerSplunk() DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```go
func PagerDuty() DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `ReleaseManagement`<sup>Required</sup> <a name="ReleaseManagement" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.releaseManagement"></a>

```go
func ReleaseManagement() DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```go
func Slack() DataAwsccDevopsagentAssociationConfigurationSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `SourceAws`<sup>Required</sup> <a name="SourceAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```go
func SourceAws() DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a>

---


### DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">CustomerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerEmail`<sup>Required</sup> <a name="CustomerEmail" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```go
func CustomerEmail() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a>

---


### DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.privateAccess">PrivateAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateAccess`<sup>Required</sup> <a name="PrivateAccess" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.privateAccess"></a>

```go
func PrivateAccess() DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccess</a>

---


### DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.privateConnectionName">PrivateConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.runtimeRoleArn">RuntimeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.privateConnectionName"></a>

```go
func PrivateConnectionName() *string
```

- *Type:* *string

---

##### `RuntimeRoleArn`<sup>Required</sup> <a name="RuntimeRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.runtimeRoleArn"></a>

```go
func RuntimeRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessPrivateAccess</a>

---


### DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagement">DataAwsccDevopsagentAssociationConfigurationReleaseManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.networkAccess"></a>

```go
func NetworkAccess() DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference">DataAwsccDevopsagentAssociationConfigurationReleaseManagementNetworkAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationReleaseManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationReleaseManagement">DataAwsccDevopsagentAssociationConfigurationReleaseManagement</a>

---


### DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectional">DataAwsccDevopsagentAssociationConfigurationSlackBidirectional</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSlackBidirectional
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectional">DataAwsccDevopsagentAssociationConfigurationSlackBidirectional</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.bidirectional">Bidirectional</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">TransmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bidirectional`<sup>Required</sup> <a name="Bidirectional" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.bidirectional"></a>

```go
func Bidirectional() DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackBidirectionalOutputReference</a>

---

##### `TransmissionTarget`<sup>Required</sup> <a name="TransmissionTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```go
func TransmissionTarget() DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSlack
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">IncidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncidentResponseTarget`<sup>Required</sup> <a name="IncidentResponseTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```go
func IncidentResponseTarget() DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.agentElevatedRoleArn">AgentElevatedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `AgentElevatedRoleArn`<sup>Required</sup> <a name="AgentElevatedRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.agentElevatedRoleArn"></a>

```go
func AgentElevatedRoleArn() *string
```

- *Type:* *string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```go
func AssumableRoleArn() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```go
func Resources() DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSourceAws
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```go
func ResourceMetadata() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSourceAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccdevopsagentassociation"

dataawsccdevopsagentassociation.NewDataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDevopsagentAssociationConfigurationSourceAwsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a>

---




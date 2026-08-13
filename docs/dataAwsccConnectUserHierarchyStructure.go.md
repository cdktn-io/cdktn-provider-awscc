# `dataAwsccConnectUserHierarchyStructure` Submodule <a name="`dataAwsccConnectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectUserHierarchyStructure <a name="DataAwsccConnectUserHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructure(scope Construct, id *string, config DataAwsccConnectUserHierarchyStructureConfig) DataAwsccConnectUserHierarchyStructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig">DataAwsccConnectUserHierarchyStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig">DataAwsccConnectUserHierarchyStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructure_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConnectUserHierarchyStructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructure">UserHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructureArn">UserHierarchyStructureArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `UserHierarchyStructure`<sup>Required</sup> <a name="UserHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```go
func UserHierarchyStructure() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `UserHierarchyStructureArn`<sup>Required</sup> <a name="UserHierarchyStructureArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```go
func UserHierarchyStructureArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectUserHierarchyStructureConfig <a name="DataAwsccConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user_hierarchy_structure#id DataAwsccConnectUserHierarchyStructure#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectUserHierarchyStructureUserHierarchyStructure <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure {

}
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive {

}
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour {

}
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne {

}
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree {

}
```


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

&dataawsccconnectuserhierarchystructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```go
func HierarchyLevelArn() *string
```

- *Type:* *string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```go
func HierarchyLevelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```go
func HierarchyLevelArn() *string
```

- *Type:* *string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```go
func HierarchyLevelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```go
func HierarchyLevelArn() *string
```

- *Type:* *string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```go
func HierarchyLevelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```go
func HierarchyLevelArn() *string
```

- *Type:* *string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```go
func HierarchyLevelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">HierarchyLevelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">HierarchyLevelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HierarchyLevelArn`<sup>Required</sup> <a name="HierarchyLevelArn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```go
func HierarchyLevelArn() *string
```

- *Type:* *string

---

##### `HierarchyLevelId`<sup>Required</sup> <a name="HierarchyLevelId" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```go
func HierarchyLevelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconnectuserhierarchystructure"

dataawsccconnectuserhierarchystructure.NewDataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">LevelFive</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">LevelFour</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">LevelOne</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">LevelThree</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">LevelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure">DataAwsccConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelFive`<sup>Required</sup> <a name="LevelFive" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```go
func LevelFive() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `LevelFour`<sup>Required</sup> <a name="LevelFour" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```go
func LevelFour() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `LevelOne`<sup>Required</sup> <a name="LevelOne" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```go
func LevelOne() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `LevelThree`<sup>Required</sup> <a name="LevelThree" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```go
func LevelThree() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `LevelTwo`<sup>Required</sup> <a name="LevelTwo" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```go
func LevelTwo() DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConnectUserHierarchyStructureUserHierarchyStructure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUserHierarchyStructure.DataAwsccConnectUserHierarchyStructureUserHierarchyStructure">DataAwsccConnectUserHierarchyStructureUserHierarchyStructure</a>

---




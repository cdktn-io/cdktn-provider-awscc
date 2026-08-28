# `dataAwsccElasticacheGlobalReplicationGroup` Submodule <a name="`dataAwsccElasticacheGlobalReplicationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheGlobalReplicationGroup <a name="DataAwsccElasticacheGlobalReplicationGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_global_replication_group awscc_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroup(scope Construct, id *string, config DataAwsccElasticacheGlobalReplicationGroupConfig) DataAwsccElasticacheGlobalReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig">DataAwsccElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig">DataAwsccElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticacheGlobalReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticacheGlobalReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheGlobalReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.members">Members</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList">DataAwsccElasticacheGlobalReplicationGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.regionalConfigurations">RegionalConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheParameterGroupName"></a>

```go
func CacheParameterGroupName() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalNodeGroupCount`<sup>Required</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalNodeGroupCount"></a>

```go
func GlobalNodeGroupCount() *f64
```

- *Type:* *f64

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```go
func GlobalReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```go
func GlobalReplicationGroupIdSuffix() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.members"></a>

```go
func Members() DataAwsccElasticacheGlobalReplicationGroupMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList">DataAwsccElasticacheGlobalReplicationGroupMembersList</a>

---

##### `RegionalConfigurations`<sup>Required</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.regionalConfigurations"></a>

```go
func RegionalConfigurations() DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheGlobalReplicationGroupConfig <a name="DataAwsccElasticacheGlobalReplicationGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

&dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_global_replication_group#id DataAwsccElasticacheGlobalReplicationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheGlobalReplicationGroupMembers <a name="DataAwsccElasticacheGlobalReplicationGroupMembers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

&dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroupMembers {

}
```


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

&dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations {

}
```


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

&dataawsccelasticacheglobalreplicationgroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheGlobalReplicationGroupMembersList <a name="DataAwsccElasticacheGlobalReplicationGroupMembersList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheGlobalReplicationGroupMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers">DataAwsccElasticacheGlobalReplicationGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion"></a>

```go
func ReplicationGroupRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheGlobalReplicationGroupMembers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers">DataAwsccElasticacheGlobalReplicationGroupMembers</a>

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion"></a>

```go
func ReplicationGroupRegion() *string
```

- *Type:* *string

---

##### `ReshardingConfigurations`<sup>Required</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations"></a>

```go
func ReshardingConfigurations() DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations</a>

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticacheglobalreplicationgroup"

dataawsccelasticacheglobalreplicationgroup.NewDataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId"></a>

```go
func NodeGroupId() *string
```

- *Type:* *string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones"></a>

```go
func PreferredAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>

---




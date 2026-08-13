# `dataAwsccConnectTrafficDistributionGroup` Submodule <a name="`dataAwsccConnectTrafficDistributionGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectTrafficDistributionGroup <a name="DataAwsccConnectTrafficDistributionGroup" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_traffic_distribution_group awscc_connect_traffic_distribution_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

new dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup(scope: Construct, id: string, config: DataAwsccConnectTrafficDistributionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig">DataAwsccConnectTrafficDistributionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig">DataAwsccConnectTrafficDistributionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectTrafficDistributionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isConstruct"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformElement"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectTrafficDistributionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectTrafficDistributionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectTrafficDistributionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_traffic_distribution_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectTrafficDistributionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList">DataAwsccConnectTrafficDistributionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.trafficDistributionGroupArn">trafficDistributionGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectTrafficDistributionGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList">DataAwsccConnectTrafficDistributionGroupTagsList</a>

---

##### `trafficDistributionGroupArn`<sup>Required</sup> <a name="trafficDistributionGroupArn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.trafficDistributionGroupArn"></a>

```typescript
public readonly trafficDistributionGroupArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectTrafficDistributionGroupConfig <a name="DataAwsccConnectTrafficDistributionGroupConfig" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.Initializer"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

const dataAwsccConnectTrafficDistributionGroupConfig: dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_traffic_distribution_group#id DataAwsccConnectTrafficDistributionGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectTrafficDistributionGroupTags <a name="DataAwsccConnectTrafficDistributionGroupTags" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTags.Initializer"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

const dataAwsccConnectTrafficDistributionGroupTags: dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectTrafficDistributionGroupTagsList <a name="DataAwsccConnectTrafficDistributionGroupTagsList" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

new dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectTrafficDistributionGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectTrafficDistributionGroupTagsOutputReference <a name="DataAwsccConnectTrafficDistributionGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectTrafficDistributionGroup } from '@cdktn/provider-awscc'

new dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTags">DataAwsccConnectTrafficDistributionGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectTrafficDistributionGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectTrafficDistributionGroup.DataAwsccConnectTrafficDistributionGroupTags">DataAwsccConnectTrafficDistributionGroupTags</a>

---




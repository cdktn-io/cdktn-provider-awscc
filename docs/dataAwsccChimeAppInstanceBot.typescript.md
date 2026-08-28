# `dataAwsccChimeAppInstanceBot` Submodule <a name="`dataAwsccChimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeAppInstanceBot <a name="DataAwsccChimeAppInstanceBot" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot(scope: Construct, id: string, config: DataAwsccChimeAppInstanceBotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig">DataAwsccChimeAppInstanceBotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig">DataAwsccChimeAppInstanceBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeAppInstanceBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn">appInstanceBotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `appInstanceBotArn`<sup>Required</sup> <a name="appInstanceBotArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn"></a>

```typescript
public readonly appInstanceBotArn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccChimeAppInstanceBotConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags"></a>

```typescript
public readonly tags: DataAwsccChimeAppInstanceBotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeAppInstanceBotConfig <a name="DataAwsccChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceBotConfig: dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot#id DataAwsccChimeAppInstanceBot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeAppInstanceBotConfiguration <a name="DataAwsccChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceBotConfiguration: dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration = { ... }
```


### DataAwsccChimeAppInstanceBotConfigurationLex <a name="DataAwsccChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceBotConfigurationLex: dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex = { ... }
```


### DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceBotConfigurationLexInvokedBy: dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy = { ... }
```


### DataAwsccChimeAppInstanceBotTags <a name="DataAwsccChimeAppInstanceBotTags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

const dataAwsccChimeAppInstanceBotTags: dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">standardMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">targetedMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardMessages`<sup>Required</sup> <a name="standardMessages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```typescript
public readonly standardMessages: string;
```

- *Type:* string

---

##### `targetedMessages`<sup>Required</sup> <a name="targetedMessages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```typescript
public readonly targetedMessages: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### DataAwsccChimeAppInstanceBotConfigurationLexOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">invokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">localeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">respondsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">welcomeIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invokedBy`<sup>Required</sup> <a name="invokedBy" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```typescript
public readonly invokedBy: DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```typescript
public readonly lexBotAliasArn: string;
```

- *Type:* string

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

---

##### `respondsTo`<sup>Required</sup> <a name="respondsTo" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```typescript
public readonly respondsTo: string;
```

- *Type:* string

---

##### `welcomeIntent`<sup>Required</sup> <a name="welcomeIntent" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```typescript
public readonly welcomeIntent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceBotConfigurationLex;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a>

---


### DataAwsccChimeAppInstanceBotConfigurationOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```typescript
public readonly lex: DataAwsccChimeAppInstanceBotConfigurationLexOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceBotConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a>

---


### DataAwsccChimeAppInstanceBotTagsList <a name="DataAwsccChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get"></a>

```typescript
public get(index: number): DataAwsccChimeAppInstanceBotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccChimeAppInstanceBotTagsOutputReference <a name="DataAwsccChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccChimeAppInstanceBot } from '@cdktn/provider-awscc'

new dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccChimeAppInstanceBotTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a>

---




# `dataAwsccIotCommand` Submodule <a name="`dataAwsccIotCommand` Submodule" id="@cdktn/provider-awscc.dataAwsccIotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotCommand <a name="DataAwsccIotCommand" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommand(scope: Construct, id: string, config: DataAwsccIotCommandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig">DataAwsccIotCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig">DataAwsccIotCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isConstruct"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

dataAwsccIotCommand.DataAwsccIotCommand.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformElement"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

dataAwsccIotCommand.DataAwsccIotCommand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

dataAwsccIotCommand.DataAwsccIotCommand.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotCommand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.commandArn">commandArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.commandId">commandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.deprecated">deprecated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.mandatoryParameters">mandatoryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList">DataAwsccIotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference">DataAwsccIotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.payloadTemplate">payloadTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.pendingDeletion">pendingDeletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference">DataAwsccIotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList">DataAwsccIotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `commandArn`<sup>Required</sup> <a name="commandArn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.commandArn"></a>

```typescript
public readonly commandArn: string;
```

- *Type:* string

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.deprecated"></a>

```typescript
public readonly deprecated: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `mandatoryParameters`<sup>Required</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.mandatoryParameters"></a>

```typescript
public readonly mandatoryParameters: DataAwsccIotCommandMandatoryParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList">DataAwsccIotCommandMandatoryParametersList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.payload"></a>

```typescript
public readonly payload: DataAwsccIotCommandPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference">DataAwsccIotCommandPayloadOutputReference</a>

---

##### `payloadTemplate`<sup>Required</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.payloadTemplate"></a>

```typescript
public readonly payloadTemplate: string;
```

- *Type:* string

---

##### `pendingDeletion`<sup>Required</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.pendingDeletion"></a>

```typescript
public readonly pendingDeletion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preprocessor`<sup>Required</sup> <a name="preprocessor" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.preprocessor"></a>

```typescript
public readonly preprocessor: DataAwsccIotCommandPreprocessorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference">DataAwsccIotCommandPreprocessorOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotCommandTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList">DataAwsccIotCommandTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotCommandConfig <a name="DataAwsccIotCommandConfig" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandConfig: dataAwsccIotCommand.DataAwsccIotCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iot_command#id DataAwsccIotCommand#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotCommandMandatoryParameters <a name="DataAwsccIotCommandMandatoryParameters" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParameters.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParameters: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParameters = { ... }
```


### DataAwsccIotCommandMandatoryParametersDefaultValue <a name="DataAwsccIotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValue.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParametersDefaultValue: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValue = { ... }
```


### DataAwsccIotCommandMandatoryParametersValue <a name="DataAwsccIotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValue.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParametersValue: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValue = { ... }
```


### DataAwsccIotCommandMandatoryParametersValueConditions <a name="DataAwsccIotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditions.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParametersValueConditions: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditions = { ... }
```


### DataAwsccIotCommandMandatoryParametersValueConditionsOperand <a name="DataAwsccIotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParametersValueConditionsOperand: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperand = { ... }
```


### DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange: dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange = { ... }
```


### DataAwsccIotCommandPayload <a name="DataAwsccIotCommandPayload" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayload.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandPayload: dataAwsccIotCommand.DataAwsccIotCommandPayload = { ... }
```


### DataAwsccIotCommandPreprocessor <a name="DataAwsccIotCommandPreprocessor" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessor.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandPreprocessor: dataAwsccIotCommand.DataAwsccIotCommandPreprocessor = { ... }
```


### DataAwsccIotCommandPreprocessorAwsJsonSubstitution <a name="DataAwsccIotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandPreprocessorAwsJsonSubstitution: dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitution = { ... }
```


### DataAwsccIotCommandTags <a name="DataAwsccIotCommandTags" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTags.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

const dataAwsccIotCommandTags: dataAwsccIotCommand.DataAwsccIotCommandTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference <a name="DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.b">b</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.bin">bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.d">d</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.i">i</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.l">l</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.s">s</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.ul">ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValue">DataAwsccIotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```typescript
public readonly b: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValue">DataAwsccIotCommandMandatoryParametersDefaultValue</a>

---


### DataAwsccIotCommandMandatoryParametersList <a name="DataAwsccIotCommandMandatoryParametersList" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.get"></a>

```typescript
public get(index: number): DataAwsccIotCommandMandatoryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotCommandMandatoryParametersOutputReference <a name="DataAwsccIotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference">DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference">DataAwsccIotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.valueConditions">valueConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList">DataAwsccIotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParameters">DataAwsccIotCommandMandatoryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference">DataAwsccIotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotCommandMandatoryParametersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference">DataAwsccIotCommandMandatoryParametersValueOutputReference</a>

---

##### `valueConditions`<sup>Required</sup> <a name="valueConditions" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```typescript
public readonly valueConditions: DataAwsccIotCommandMandatoryParametersValueConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList">DataAwsccIotCommandMandatoryParametersValueConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParameters">DataAwsccIotCommandMandatoryParameters</a>

---


### DataAwsccIotCommandMandatoryParametersValueConditionsList <a name="DataAwsccIotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange">DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```typescript
public readonly max: string;
```

- *Type:* string

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```typescript
public readonly min: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange">DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---


### DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">numberRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">numbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">string</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">strings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperand">DataAwsccIotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```typescript
public readonly number: string;
```

- *Type:* string

---

##### `numberRange`<sup>Required</sup> <a name="numberRange" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```typescript
public readonly numberRange: DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">DataAwsccIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```typescript
public readonly numbers: string[];
```

- *Type:* string[]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParametersValueConditionsOperand;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperand">DataAwsccIotCommandMandatoryParametersValueConditionsOperand</a>

---


### DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference <a name="DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference">DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditions">DataAwsccIotCommandMandatoryParametersValueConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```typescript
public readonly operand: DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference">DataAwsccIotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParametersValueConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueConditions">DataAwsccIotCommandMandatoryParametersValueConditions</a>

---


### DataAwsccIotCommandMandatoryParametersValueOutputReference <a name="DataAwsccIotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.b">b</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.bin">bin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.d">d</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.i">i</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.l">l</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.s">s</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.ul">ul</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValue">DataAwsccIotCommandMandatoryParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.b"></a>

```typescript
public readonly b: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```typescript
public readonly bin: string;
```

- *Type:* string

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.d"></a>

```typescript
public readonly d: number;
```

- *Type:* number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.i"></a>

```typescript
public readonly i: number;
```

- *Type:* number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.l"></a>

```typescript
public readonly l: string;
```

- *Type:* string

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.s"></a>

```typescript
public readonly s: string;
```

- *Type:* string

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```typescript
public readonly ul: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandMandatoryParametersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandMandatoryParametersValue">DataAwsccIotCommandMandatoryParametersValue</a>

---


### DataAwsccIotCommandPayloadOutputReference <a name="DataAwsccIotCommandPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayload">DataAwsccIotCommandPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPayload">DataAwsccIotCommandPayload</a>

---


### DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitution">DataAwsccIotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandPreprocessorAwsJsonSubstitution;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitution">DataAwsccIotCommandPreprocessorAwsJsonSubstitution</a>

---


### DataAwsccIotCommandPreprocessorOutputReference <a name="DataAwsccIotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.awsJsonSubstitution">awsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference">DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessor">DataAwsccIotCommandPreprocessor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsJsonSubstitution`<sup>Required</sup> <a name="awsJsonSubstitution" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```typescript
public readonly awsJsonSubstitution: DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference">DataAwsccIotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandPreprocessor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandPreprocessor">DataAwsccIotCommandPreprocessor</a>

---


### DataAwsccIotCommandTagsList <a name="DataAwsccIotCommandTagsList" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotCommandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotCommandTagsOutputReference <a name="DataAwsccIotCommandTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotCommand } from '@cdktn/provider-awscc'

new dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTags">DataAwsccIotCommandTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotCommandTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotCommand.DataAwsccIotCommandTags">DataAwsccIotCommandTags</a>

---




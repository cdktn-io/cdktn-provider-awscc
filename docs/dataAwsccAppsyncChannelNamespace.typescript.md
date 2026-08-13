# `dataAwsccAppsyncChannelNamespace` Submodule <a name="`dataAwsccAppsyncChannelNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncChannelNamespace <a name="DataAwsccAppsyncChannelNamespace" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_channel_namespace awscc_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace(scope: Construct, id: string, config: DataAwsccAppsyncChannelNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig">DataAwsccAppsyncChannelNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig">DataAwsccAppsyncChannelNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncChannelNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn">channelNamespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers">codeHandlers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location">codeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs">handlerConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes">publishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes">subscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `channelNamespaceArn`<sup>Required</sup> <a name="channelNamespaceArn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn"></a>

```typescript
public readonly channelNamespaceArn: string;
```

- *Type:* string

---

##### `codeHandlers`<sup>Required</sup> <a name="codeHandlers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers"></a>

```typescript
public readonly codeHandlers: string;
```

- *Type:* string

---

##### `codeS3Location`<sup>Required</sup> <a name="codeS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location"></a>

```typescript
public readonly codeS3Location: string;
```

- *Type:* string

---

##### `handlerConfigs`<sup>Required</sup> <a name="handlerConfigs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs"></a>

```typescript
public readonly handlerConfigs: DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publishAuthModes`<sup>Required</sup> <a name="publishAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes"></a>

```typescript
public readonly publishAuthModes: DataAwsccAppsyncChannelNamespacePublishAuthModesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a>

---

##### `subscribeAuthModes`<sup>Required</sup> <a name="subscribeAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes"></a>

```typescript
public readonly subscribeAuthModes: DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppsyncChannelNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncChannelNamespaceConfig <a name="DataAwsccAppsyncChannelNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceConfig: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_channel_namespace#id DataAwsccAppsyncChannelNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncChannelNamespaceHandlerConfigs <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigs: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration = { ... }
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig = { ... }
```


### DataAwsccAppsyncChannelNamespacePublishAuthModes <a name="DataAwsccAppsyncChannelNamespacePublishAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespacePublishAuthModes: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes = { ... }
```


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModes <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceSubscribeAuthModes: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes = { ... }
```


### DataAwsccAppsyncChannelNamespaceTags <a name="DataAwsccAppsyncChannelNamespaceTags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

const dataAwsccAppsyncChannelNamespaceTags: dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```typescript
public readonly invokeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```typescript
public readonly integration: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```typescript
public readonly invokeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```typescript
public readonly integration: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">onPublish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">onSubscribe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onPublish`<sup>Required</sup> <a name="onPublish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```typescript
public readonly onPublish: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a>

---

##### `onSubscribe`<sup>Required</sup> <a name="onSubscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```typescript
public readonly onSubscribe: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceHandlerConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a>

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesList <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get"></a>

```typescript
public get(index: number): DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespacePublishAuthModes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get"></a>

```typescript
public get(index: number): DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceSubscribeAuthModes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceTagsList <a name="DataAwsccAppsyncChannelNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppsyncChannelNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppsyncChannelNamespaceTagsOutputReference <a name="DataAwsccAppsyncChannelNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppsyncChannelNamespace } from '@cdktn/provider-awscc'

new dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppsyncChannelNamespaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a>

---




# `route53RecordSet` Submodule <a name="`route53RecordSet` Submodule" id="@cdktn/provider-awscc.route53RecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordSet <a name="Route53RecordSet" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set awscc_route53_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSet;

Route53RecordSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .aliasTarget(Route53RecordSetAliasTarget)
//  .cidrRoutingConfig(Route53RecordSetCidrRoutingConfig)
//  .comment(java.lang.String)
//  .failover(java.lang.String)
//  .geoLocation(Route53RecordSetGeoLocation)
//  .geoProximityLocation(Route53RecordSetGeoProximityLocation)
//  .healthCheckId(java.lang.String)
//  .hostedZoneId(java.lang.String)
//  .hostedZoneName(java.lang.String)
//  .multiValueAnswer(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .resourceRecords(java.util.List<java.lang.String>)
//  .setIdentifier(java.lang.String)
//  .ttl(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#name Route53RecordSet#name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#type Route53RecordSet#type}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.failover">failover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneName">hostedZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.multiValueAnswer">multiValueAnswer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#region Route53RecordSet#region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.resourceRecords">resourceRecords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#name Route53RecordSet#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#type Route53RecordSet#type}.

---

##### `aliasTarget`<sup>Optional</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.aliasTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}.

---

##### `cidrRoutingConfig`<sup>Optional</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.cidrRoutingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}.

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.failover"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}.

---

##### `geoLocation`<sup>Optional</sup> <a name="geoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}.

---

##### `geoProximityLocation`<sup>Optional</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoProximityLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}.

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.healthCheckId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

##### `hostedZoneName`<sup>Optional</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}.

---

##### `multiValueAnswer`<sup>Optional</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.multiValueAnswer"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#region Route53RecordSet#region}.

---

##### `resourceRecords`<sup>Optional</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.resourceRecords"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.setIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget">putAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig">putCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation">putGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation">putGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget">resetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig">resetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation">resetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation">resetGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName">resetHostedZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer">resetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords">resetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier">resetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAliasTarget` <a name="putAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget"></a>

```java
public void putAliasTarget(Route53RecordSetAliasTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `putCidrRoutingConfig` <a name="putCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig"></a>

```java
public void putCidrRoutingConfig(Route53RecordSetCidrRoutingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `putGeoLocation` <a name="putGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation"></a>

```java
public void putGeoLocation(Route53RecordSetGeoLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `putGeoProximityLocation` <a name="putGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation"></a>

```java
public void putGeoProximityLocation(Route53RecordSetGeoProximityLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---

##### `resetAliasTarget` <a name="resetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget"></a>

```java
public void resetAliasTarget()
```

##### `resetCidrRoutingConfig` <a name="resetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig"></a>

```java
public void resetCidrRoutingConfig()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment"></a>

```java
public void resetComment()
```

##### `resetFailover` <a name="resetFailover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover"></a>

```java
public void resetFailover()
```

##### `resetGeoLocation` <a name="resetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation"></a>

```java
public void resetGeoLocation()
```

##### `resetGeoProximityLocation` <a name="resetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation"></a>

```java
public void resetGeoProximityLocation()
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId"></a>

```java
public void resetHealthCheckId()
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId"></a>

```java
public void resetHostedZoneId()
```

##### `resetHostedZoneName` <a name="resetHostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName"></a>

```java
public void resetHostedZoneName()
```

##### `resetMultiValueAnswer` <a name="resetMultiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer"></a>

```java
public void resetMultiValueAnswer()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceRecords` <a name="resetResourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords"></a>

```java
public void resetResourceRecords()
```

##### `resetSetIdentifier` <a name="resetSetIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier"></a>

```java
public void resetSetIdentifier()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSet;

Route53RecordSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSet;

Route53RecordSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSet;

Route53RecordSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSet;

Route53RecordSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53RecordSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53RecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53RecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId">recordSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput">aliasTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput">cidrRoutingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput">failoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput">geoLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput">geoProximityLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput">hostedZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput">multiValueAnswerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput">resourceRecordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput">setIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover">failover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName">hostedZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer">multiValueAnswer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords">resourceRecords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliasTarget`<sup>Required</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget"></a>

```java
public Route53RecordSetAliasTargetOutputReference getAliasTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a>

---

##### `cidrRoutingConfig`<sup>Required</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig"></a>

```java
public Route53RecordSetCidrRoutingConfigOutputReference getCidrRoutingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a>

---

##### `geoLocation`<sup>Required</sup> <a name="geoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation"></a>

```java
public Route53RecordSetGeoLocationOutputReference getGeoLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a>

---

##### `geoProximityLocation`<sup>Required</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation"></a>

```java
public Route53RecordSetGeoProximityLocationOutputReference getGeoProximityLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recordSetId`<sup>Required</sup> <a name="recordSetId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId"></a>

```java
public java.lang.String getRecordSetId();
```

- *Type:* java.lang.String

---

##### `aliasTargetInput`<sup>Optional</sup> <a name="aliasTargetInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput"></a>

```java
public IResolvable|Route53RecordSetAliasTarget getAliasTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `cidrRoutingConfigInput`<sup>Optional</sup> <a name="cidrRoutingConfigInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput"></a>

```java
public IResolvable|Route53RecordSetCidrRoutingConfig getCidrRoutingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput"></a>

```java
public java.lang.String getFailoverInput();
```

- *Type:* java.lang.String

---

##### `geoLocationInput`<sup>Optional</sup> <a name="geoLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput"></a>

```java
public IResolvable|Route53RecordSetGeoLocation getGeoLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `geoProximityLocationInput`<sup>Optional</sup> <a name="geoProximityLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput"></a>

```java
public IResolvable|Route53RecordSetGeoProximityLocation getGeoProximityLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput"></a>

```java
public java.lang.String getHealthCheckIdInput();
```

- *Type:* java.lang.String

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostedZoneNameInput`<sup>Optional</sup> <a name="hostedZoneNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput"></a>

```java
public java.lang.String getHostedZoneNameInput();
```

- *Type:* java.lang.String

---

##### `multiValueAnswerInput`<sup>Optional</sup> <a name="multiValueAnswerInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiValueAnswerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceRecordsInput`<sup>Optional</sup> <a name="resourceRecordsInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput"></a>

```java
public java.util.List<java.lang.String> getResourceRecordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setIdentifierInput`<sup>Optional</sup> <a name="setIdentifierInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput"></a>

```java
public java.lang.String getSetIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover"></a>

```java
public java.lang.String getFailover();
```

- *Type:* java.lang.String

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `hostedZoneName`<sup>Required</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName"></a>

```java
public java.lang.String getHostedZoneName();
```

- *Type:* java.lang.String

---

##### `multiValueAnswer`<sup>Required</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer"></a>

```java
public java.lang.Boolean|IResolvable getMultiValueAnswer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords"></a>

```java
public java.util.List<java.lang.String> getResourceRecords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier"></a>

```java
public java.lang.String getSetIdentifier();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordSetAliasTarget <a name="Route53RecordSetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetAliasTarget;

Route53RecordSetAliasTarget.builder()
//  .dnsName(java.lang.String)
//  .evaluateTargetHealth(java.lang.Boolean|IResolvable)
//  .hostedZoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}.

---

##### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth"></a>

```java
public java.lang.Boolean|IResolvable getEvaluateTargetHealth();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

### Route53RecordSetCidrRoutingConfig <a name="Route53RecordSetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetCidrRoutingConfig;

Route53RecordSetCidrRoutingConfig.builder()
//  .collectionId(java.lang.String)
//  .locationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName">locationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}. |

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}.

---

##### `locationName`<sup>Optional</sup> <a name="locationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}.

---

### Route53RecordSetConfig <a name="Route53RecordSetConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetConfig;

Route53RecordSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .aliasTarget(Route53RecordSetAliasTarget)
//  .cidrRoutingConfig(Route53RecordSetCidrRoutingConfig)
//  .comment(java.lang.String)
//  .failover(java.lang.String)
//  .geoLocation(Route53RecordSetGeoLocation)
//  .geoProximityLocation(Route53RecordSetGeoProximityLocation)
//  .healthCheckId(java.lang.String)
//  .hostedZoneId(java.lang.String)
//  .hostedZoneName(java.lang.String)
//  .multiValueAnswer(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .resourceRecords(java.util.List<java.lang.String>)
//  .setIdentifier(java.lang.String)
//  .ttl(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#name Route53RecordSet#name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#type Route53RecordSet#type}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover">failover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName">hostedZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer">multiValueAnswer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#region Route53RecordSet#region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords">resourceRecords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#name Route53RecordSet#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#type Route53RecordSet#type}.

---

##### `aliasTarget`<sup>Optional</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget"></a>

```java
public Route53RecordSetAliasTarget getAliasTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}.

---

##### `cidrRoutingConfig`<sup>Optional</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig"></a>

```java
public Route53RecordSetCidrRoutingConfig getCidrRoutingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}.

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover"></a>

```java
public java.lang.String getFailover();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}.

---

##### `geoLocation`<sup>Optional</sup> <a name="geoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation"></a>

```java
public Route53RecordSetGeoLocation getGeoLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}.

---

##### `geoProximityLocation`<sup>Optional</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation"></a>

```java
public Route53RecordSetGeoProximityLocation getGeoProximityLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}.

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

##### `hostedZoneName`<sup>Optional</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName"></a>

```java
public java.lang.String getHostedZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}.

---

##### `multiValueAnswer`<sup>Optional</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer"></a>

```java
public java.lang.Boolean|IResolvable getMultiValueAnswer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#region Route53RecordSet#region}.

---

##### `resourceRecords`<sup>Optional</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords"></a>

```java
public java.util.List<java.lang.String> getResourceRecords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier"></a>

```java
public java.lang.String getSetIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}.

---

### Route53RecordSetGeoLocation <a name="Route53RecordSetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoLocation;

Route53RecordSetGeoLocation.builder()
//  .continentCode(java.lang.String)
//  .countryCode(java.lang.String)
//  .subdivisionCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode">continentCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode">subdivisionCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}. |

---

##### `continentCode`<sup>Optional</sup> <a name="continentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode"></a>

```java
public java.lang.String getContinentCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}.

---

##### `subdivisionCode`<sup>Optional</sup> <a name="subdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode"></a>

```java
public java.lang.String getSubdivisionCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}.

---

### Route53RecordSetGeoProximityLocation <a name="Route53RecordSetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoProximityLocation;

Route53RecordSetGeoProximityLocation.builder()
//  .awsRegion(java.lang.String)
//  .bias(java.lang.Number)
//  .coordinates(Route53RecordSetGeoProximityLocationCoordinates)
//  .localZoneGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias">bias</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates">coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup">localZoneGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}.

---

##### `bias`<sup>Optional</sup> <a name="bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias"></a>

```java
public java.lang.Number getBias();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}.

---

##### `coordinates`<sup>Optional</sup> <a name="coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates"></a>

```java
public Route53RecordSetGeoProximityLocationCoordinates getCoordinates();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}.

---

##### `localZoneGroup`<sup>Optional</sup> <a name="localZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup"></a>

```java
public java.lang.String getLocalZoneGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}.

---

### Route53RecordSetGeoProximityLocationCoordinates <a name="Route53RecordSetGeoProximityLocationCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoProximityLocationCoordinates;

Route53RecordSetGeoProximityLocationCoordinates.builder()
//  .latitude(java.lang.String)
//  .longitude(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude">latitude</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude">longitude</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}. |

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}.

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordSetAliasTargetOutputReference <a name="Route53RecordSetAliasTargetOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetAliasTargetOutputReference;

new Route53RecordSetAliasTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth">resetEvaluateTargetHealth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsName` <a name="resetDnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName"></a>

```java
public void resetDnsName()
```

##### `resetEvaluateTargetHealth` <a name="resetEvaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth"></a>

```java
public void resetEvaluateTargetHealth()
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId"></a>

```java
public void resetHostedZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">evaluateTargetHealthInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `evaluateTargetHealthInput`<sup>Optional</sup> <a name="evaluateTargetHealthInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```java
public java.lang.Boolean|IResolvable getEvaluateTargetHealthInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```java
public java.lang.Boolean|IResolvable getEvaluateTargetHealth();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecordSetAliasTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---


### Route53RecordSetCidrRoutingConfigOutputReference <a name="Route53RecordSetCidrRoutingConfigOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetCidrRoutingConfigOutputReference;

new Route53RecordSetCidrRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName">resetLocationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId"></a>

```java
public void resetCollectionId()
```

##### `resetLocationName` <a name="resetLocationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName"></a>

```java
public void resetLocationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput">locationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName">locationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```java
public java.lang.String getLocationNameInput();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecordSetCidrRoutingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---


### Route53RecordSetGeoLocationOutputReference <a name="Route53RecordSetGeoLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoLocationOutputReference;

new Route53RecordSetGeoLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode">resetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode">resetSubdivisionCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinentCode` <a name="resetContinentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode"></a>

```java
public void resetContinentCode()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetSubdivisionCode` <a name="resetSubdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode"></a>

```java
public void resetSubdivisionCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput">continentCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput">subdivisionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode">continentCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode">subdivisionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continentCodeInput`<sup>Optional</sup> <a name="continentCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput"></a>

```java
public java.lang.String getContinentCodeInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `subdivisionCodeInput`<sup>Optional</sup> <a name="subdivisionCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput"></a>

```java
public java.lang.String getSubdivisionCodeInput();
```

- *Type:* java.lang.String

---

##### `continentCode`<sup>Required</sup> <a name="continentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode"></a>

```java
public java.lang.String getContinentCode();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `subdivisionCode`<sup>Required</sup> <a name="subdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode"></a>

```java
public java.lang.String getSubdivisionCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecordSetGeoLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---


### Route53RecordSetGeoProximityLocationCoordinatesOutputReference <a name="Route53RecordSetGeoProximityLocationCoordinatesOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoProximityLocationCoordinatesOutputReference;

new Route53RecordSetGeoProximityLocationCoordinatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude">resetLongitude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLatitude` <a name="resetLatitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude"></a>

```java
public void resetLatitude()
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude"></a>

```java
public void resetLongitude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```java
public java.lang.String getLatitudeInput();
```

- *Type:* java.lang.String

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```java
public java.lang.String getLongitudeInput();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecordSetGeoProximityLocationCoordinates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---


### Route53RecordSetGeoProximityLocationOutputReference <a name="Route53RecordSetGeoProximityLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_record_set.Route53RecordSetGeoProximityLocationOutputReference;

new Route53RecordSetGeoProximityLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates">putCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias">resetBias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates">resetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup">resetLocalZoneGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoordinates` <a name="putCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates"></a>

```java
public void putCoordinates(Route53RecordSetGeoProximityLocationCoordinates value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetBias` <a name="resetBias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias"></a>

```java
public void resetBias()
```

##### `resetCoordinates` <a name="resetCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates"></a>

```java
public void resetCoordinates()
```

##### `resetLocalZoneGroup` <a name="resetLocalZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup"></a>

```java
public void resetLocalZoneGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput">biasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput">localZoneGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias">bias</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates"></a>

```java
public Route53RecordSetGeoProximityLocationCoordinatesOutputReference getCoordinates();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `biasInput`<sup>Optional</sup> <a name="biasInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput"></a>

```java
public java.lang.Number getBiasInput();
```

- *Type:* java.lang.Number

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput"></a>

```java
public IResolvable|Route53RecordSetGeoProximityLocationCoordinates getCoordinatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---

##### `localZoneGroupInput`<sup>Optional</sup> <a name="localZoneGroupInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput"></a>

```java
public java.lang.String getLocalZoneGroupInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias"></a>

```java
public java.lang.Number getBias();
```

- *Type:* java.lang.Number

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup"></a>

```java
public java.lang.String getLocalZoneGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53RecordSetGeoProximityLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---



